export interface CustomerDownload {
  download_id: string; // en lecture seule
  download_url: string; // en lecture seule
  product_id: number; // en lecture seule
  product_name: string; // en lecture seule
  download_name: string; // en lecture seule
  order_id: number; // en lecture seule
  order_key: string; // en lecture seule
  downloads_remaining: string; // en lecture seule
  access_expires: string; // en lecture seule
  access_expires_gmt: string; // en lecture seule
  file: DownloadFile; // en lecture seule
}

export interface DownloadFile {
  name: string; // en lecture seule
  file: string; // en lecture seule
}
