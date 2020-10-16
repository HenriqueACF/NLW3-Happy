import Image from '../models/Image';

export default{
  render(image: Image){
    return{
      id: image.id,
      // url:`http://localhost:3333/uploads/${image.path}`,
      url:`http://192.168.31.55:3333/uploads/${image.path}`,
    };
  },

  renderMany(images:Image[]){
    return images.map(image => this.render(image))
  }
};