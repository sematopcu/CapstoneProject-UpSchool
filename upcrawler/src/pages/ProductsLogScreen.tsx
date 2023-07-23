import React, { useEffect, useState } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import LogList from '../components/LogList';
import './ProductsLogScreen.css';

interface Log {
    message: string;
    sentOn: string;
}

const ProductsLogScreen: React.FC = () => {
    const [productLogs, setProductLogs] = useState<Log[]>([]);

    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:7243/Hubs/SeleniumLogHub')
            .build();

        connection.on('NewProductLogAdded', (productLog: Log) => {
            setProductLogs((prevLogs) => [...prevLogs, productLog]);
        });

        connection
            .start()
            .then(() => console.log('SignalR connected.'))
            .catch((error) => console.error('SignalR connection error: ', error));

        return () => {
            connection.stop();
        };
    }, []);

    return (
        <div className="products-terminal space shadow">
            <div className="product-top">
                <div className="btns">
                    <span className="circle products-red"></span>
                    <span className="circle products-yellow"></span>
                    <span className="circle products-green"></span>
                </div>
                <div className="products-title">
                    <b>Scraped Products</b>
                </div>
            </div>
            <pre className="product-body">
        <LogList logs={productLogs} />
      </pre>
        </div>
    );
};

export default ProductsLogScreen;
