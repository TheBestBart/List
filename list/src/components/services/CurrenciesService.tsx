import { useState, useEffect } from "react";
import { CURRENCIES_URL } from "../../common/URL";

export interface CurrenciesData {
    currencies: Array<Currency>,
    filterCurrencies: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export interface Currency {
    currency: string,
    code: string,
    mid: number
}

interface CurrenciesServiceProps {
    render: (data: CurrenciesData) => JSX.Element | null
}

const CurrenciesService: React.FC<CurrenciesServiceProps> = ({ render }) => {
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>(currencies)
    
    const uploadData = async (): Promise<void> => {
        const response = await fetch(CURRENCIES_URL);
        const json = await response.json();
        setCurrencies(json[0].rates);
        setFilteredCurrencies(json[0].rates);
    }

    useEffect(() => {
        uploadData();
    }, [])

    const filterCurrencies = (event: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        let filteredCurrencies: Currency[] = currencies.filter(currency => currency.currency.includes(value));
        setFilteredCurrencies(filteredCurrencies);
    } 
    
    return render({ currencies: filteredCurrencies, filterCurrencies: filterCurrencies });
}
 
export default CurrenciesService;