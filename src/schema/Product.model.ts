import mongoose, {Schema} from "mongoose";
import { ProductBrand, ProductCollection, ProductOperationSystem, ProductResolution, ProductStatus } from "../libs/enums/product.enum";


const productschema = new Schema({
  productStatus: {
    type: String,
    enum: ProductStatus,
    default: ProductStatus.PROCESS
  },

  productCollection: {
    type: String,
    enum: ProductCollection,
    required: true
  },

  productName: {
    type: String,
    required: true,
  },

  // 8 GB
  productRam: {
    type: Number || null,
    required: true
  },

  // One UI 6.1, Android 14, IOS
  productOpSystem: {
    type: String,
    enum: ProductOperationSystem,
    default: ProductOperationSystem.OTHER
  },

  productCpuSpeed: {
    type: Number,
  },

  productPrice: {
    type: Number,
    required: true,
  },

  productLeftCount: {
    type: Number,
    required: true,
  },

  productResolution: {
    type: String,
    enum: ProductResolution,
    required: true,
  },

  // Size will be in inches => 6.7 inch
  productScreenSize: {
    type: Number || null,
    required: true,
  },
  
  productBattery: {
    type: Number || null,
    required: true,
  },

  // 128 GB
  productMemory: {
    type: Number,
    required: true,
  },

  //50 MP Mega pixels
  productCamera: {
    type: Number,
  },

  productBrand: {
    type: String,
    enum: ProductBrand,
    required: true
  },

  productDesc: {
    type: String,
  },
  
  productImages: {
    type: [String],
    default: []
  },

  productViews: {
    type: Number,
    default: 0
  },
},
{ timestamps: true}  //createdAt, updatedAt
);

productschema.index(
  { productName: 1, productBrand: 1},
  { unique: true }
);

export default mongoose.model('Product', productschema);