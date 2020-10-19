import { useState, useEffect, useCallback, memo } from "react";
import { CURRENCIES_URL } from "../../common/URL";

export interface CurrenciesData {
    currencies: Array<Currency>;
    filterCurrencies: (event: React.ChangeEvent<HTMLInputElement>) => void;
    isError: boolean;
}

export interface Currency {
    currency: string;
    code: string;
    mid: number;
}

interface CurrenciesServiceProps {
    render: (data: CurrenciesData) => JSX.Element | null;
}

const CurrenciesService: React.FC<CurrenciesServiceProps> = ({ render }) => {
    console.log('wypełniam sie in currencies Service')
    const [currencies, setCurrencies] = useState<Currency[]>([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState<Currency[]>(
        currencies
    );
    const [error, setError] = useState<boolean>(false);
    const uploadData = async (): Promise<void> => {
        try {
            const response = await fetch(CURRENCIES_URL);
            const json = await response.json();
            setCurrencies(json[0].rates);
            setFilteredCurrencies(json[0].rates);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    useEffect(() => {
        uploadData();
    }, []);

    const filterCurrencies = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = event.target;
        console.log('wypelniam się')
        let filteredCurrencies: Currency[] = currencies.filter(currency =>
            currency.currency.toUpperCase().includes(value.toUpperCase())
        );
        setFilteredCurrencies(filteredCurrencies);
    }, [setFilteredCurrencies, currencies]);

    return render({
        isError: error,
        currencies: filteredCurrencies,
        filterCurrencies: filterCurrencies
    });
};

export default memo(CurrenciesService);
