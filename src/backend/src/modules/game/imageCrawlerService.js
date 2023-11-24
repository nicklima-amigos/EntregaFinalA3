export class ImageCrawlerService {
  baseUrl = "https://api.rawg.io/api";

  async run(gameName) {
    return this.getImageLink(gameName);
  }

  async getImageLink(gameName) {
    try {
      gameName = gameName.split(" ").join("-");
      const response = await fetch(
        `${this.baseUrl}/games?key=1cd13dc8e1d2425abee1141d67656372&search=${gameName}`,
      );
      const responseBody = await response.json();
      return responseBody.results[0].background_image;
    } catch {
      return "";
    }
  }
}
