import { Controller, Get } from '@nestjs/common';
import { FilesService } from './gofile.service';

@Controller('files')
export class FilesController {
    constructor(private readonly filesService: FilesService) {}
    @Get()
    getserver (){
        return this.filesService.getserver()
    } 
}
