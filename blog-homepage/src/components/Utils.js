class Utils {
  static formatArticleDate(dateString) {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', {month: 'short'})
    const day = date.getDate();
    return `${month} ${day}`;
  }
}

export default Utils;