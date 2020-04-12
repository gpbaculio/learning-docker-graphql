import got from 'got';

const LISTINGS_SERVICE_URI = 'http://listings-service:7100';

export default class ListingsService {
  static async fetchAllListings() {
    const allListings = await got.get(`${LISTINGS_SERVICE_URI}/listings`).json();
    return allListings;
  }
}
