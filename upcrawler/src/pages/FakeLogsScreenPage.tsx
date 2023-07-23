import React from 'react';
import CrawlerLogScreen from './CrawlerLogScreen';
import ProductsLogScreen from './ProductsLogScreen';
import './FakeLogsScreen.css'; // CSS dosyası

const FakeLogScreen: React.FC = () => {
    return (
        <div className="fake-log-screen">
            <div className="crawler-log">
                <h1>Crawler Log Screen</h1>
                <CrawlerLogScreen />
            </div>

            <div className="products-log">
                <h1>Products Log Screen</h1>
                <ProductsLogScreen />
            </div>
        </div>
    );
};

export default FakeLogScreen;
