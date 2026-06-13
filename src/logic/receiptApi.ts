import { ImagePickerAsset } from 'expo-image-picker';
import { demoReceipt } from '../data/mockData';
import { ReceiptParseResult } from '../types';

export async function parseReceiptImage(_asset: ImagePickerAsset): Promise<ReceiptParseResult> {
  // Demo OCR mode for reliable hackathon demo. Replace this with Azure AI Document Intelligence later.
  await new Promise((resolve) => setTimeout(resolve, 500));
  return demoReceipt;
}
