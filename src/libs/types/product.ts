import { ProductBrand, ProductCollection, ProductOperationSystem, ProductResolution, ProductStatus } from "../enums/product.enum";
import {ObjectId} from "mongoose";

export interface Product{
  _id: ObjectId;
  productStatus: ProductStatus;
  productCollection: ProductCollection;
  productName: string;
  productRam: number;
  productOpSystem: ProductOperationSystem;
  productCpuSpeed?: number;
  productPrice: number;
  productLeftCount: number;
  productResolution: ProductResolution;
  productScreenSize: number;
  productBattery: number;
  productMemory: number;
  productCamera?: number;
  productBrand: ProductBrand;
  productDesc?: string;
  productImages: string[];
  productViews: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductInquiry{
  order: string;
  page: number;
  limit: number;
  productCollection?: ProductCollection;
  productBrand?: ProductBrand;
  search?: string;
}

export interface ProductInput{
  productStatus?: ProductStatus; // -
  productCollection: ProductCollection;
  productName: string;
  productRam: number;
  productOpSystem?: ProductOperationSystem;
  productCpuSpeed?: number;
  productPrice: number;
  productLeftCount: number;
  productResolution: ProductResolution;
  productScreenSize: number;
  productBattery: number;
  productMemory: number;
  productCamera?: number;
  productBrand?: ProductBrand;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;    // 16
}

export interface ProductUpdateInput{
  _id: ObjectId;
  productStatus?: ProductStatus;
  productCollection?: ProductCollection;
  productName?: string;
  productRam?: number;
  productOpSystem?: ProductOperationSystem;
  productCpuSpeed?: number;
  productPrice?: number;
  productLeftCount?: number;
  productResolution?: ProductResolution;
  productScreenSize?: number;
  productBattery?: number;
  productMemory?: number;
  productCamera?: number;
  productBrand?: ProductBrand;
  productDesc?: string;
  productImages?: string[];
  productViews?: number;
}

