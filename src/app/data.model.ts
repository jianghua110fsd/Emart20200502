export interface Product {
    productId: string;
    productName: string;
    categoryId: string;
    categoryName: string;
    sellerId: string;
    subcategoryId: string;
    subcategoryName: string;
    description: string;
    unit: string;
    currentPrice: number;
    currentStock: number;
    remarks: string;
}

export interface PrdSearchCond {
    prdName: string;
    categoryId: string;
    subcategoryId: string;
    priceFrom: number;
    priceTo: number;
}

export interface Cart {
	buyerId: string;
    productId: string;
    productName: string;
    sellerId: string;
    purchasePrice: number;
    purchaseNum: number;
    remarks: string;
}

export interface CartResp {
    productId: string;
    productName: string;
    categoryName: string;
    subcategoryName: string;
    unit: string;
    purchasePrice: number;
    purchaseNum: number;
    remarks: string;
}
