import { IsOptional, IsString, IsArray } from 'class-validator';
import { IsObjectId } from 'class-validator-mongo-object-id'; // mongoDB _id 용 validator
import { Hall } from '../schema/hall.schema';
export class CreateHallDto {
  @IsObjectId()
  readonly galleryId: string;

  @IsString()
  readonly hallName: string;

  @IsArray()
  readonly imagesData: string;

  @IsOptional()
  readonly hall: Hall;
}
