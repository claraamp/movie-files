import { Injectable } from '@nestjs/common';


@Injectable()
export class FilesService {
    async getserver () {
        fetch('https://api.gofile.io/getServer')
  .then(response => response.json())
  .then(data => {
    if (data.status === 'ok') {
      console.log(data.data.server)
    }
  })
  .catch(error => console.error(error))
    }
    
  
}