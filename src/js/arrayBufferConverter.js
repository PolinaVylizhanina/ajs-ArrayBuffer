export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const newData = new Uint16Array(this.buffer);
    return String.fromCharCode(...newData);
  }
}
