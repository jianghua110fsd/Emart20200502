export interface Product {
    productId: string;
    productName: string;
    categoryId: string;
    categoryName: string;
    sellerId: string;
    subcategoryId: string;
    subcategoryName: string;
    unit: string;
    currentPrice: number;
    currentStock: number;
    description: string;
    remarks: string;
}

export interface PrdSearchCond {
    prdName: string;
    categoryId: string;
    subcategoryId: string;
    priceFrom: number;
    priceTo: number;
}

export interface CartReq {
	buyerId: string;
    productId: string;
    productName: string;
    sellerId: string;
    purchasePrice: number;
    purchaseNum: number;
    remarks: string;
    fromDetail: boolean;
}

export interface CartResp {
    productId: string;
    productName: string;
    categoryName: string;
    subcategoryName: string;
	sellerId: String;
    unit: string;
    purchasePrice: number;
    purchaseNum: number;
    remarks: string;
    chkFlg: boolean;
}

export interface RemoveCartReq {
    buyerId: string;
    productIds: string[];
}

export interface OrderReq {
	buyerId: string;
	buyerName: string;
    productId: string;
    productName: string;
	sellerId: String;
    purchasePrice: number;
    purchaseNum: number;
    purchaseAmount: number;
    transactionType: string;
    transactionAmount: number;
    remarks: string;
}

export interface OrderResp {
	orderNo: string;
	orderDate: string;
    productId: string;
    productName: string;
    categoryName: string;
    subcategoryName: string;
    unit: string;
    purchasePrice: number;
    purchaseNum: number;
    purchaseAmount: number;
    transactionType: string;
    transactionAmount: number;
}
