import { Module } from '@nestjs/common';
import { MovieFilesModule } from './movie-files/movie-files.module';

@Module({
  imports: [MovieFilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
