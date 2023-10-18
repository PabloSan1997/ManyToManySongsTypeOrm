import {Entity, PrimaryGeneratedColumn, Column, ManyToMany} from 'typeorm';
import { Author } from './Author';


@Entity()
export class Songs{
    @PrimaryGeneratedColumn('uuid')
    	id_cancion:string;

    @Column({length:60})
    	name_sing:string;

    @Column()
    	release_date:Date;

    @Column({length:1500})
    	image_Album:string;

    @Column({length:60})
    	album_name:string;

    @ManyToMany(()=>Author, (author)=>author.songs)
    	authors:Author[];
}