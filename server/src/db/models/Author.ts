/* eslint-disable no-mixed-spaces-and-tabs */
import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable} from 'typeorm';
import { Songs } from './Songs';


@Entity()
export class Author{
    @PrimaryGeneratedColumn('uuid')
    	id_autor:string;

    @Column({length:60})
    	name_author:string;

    @Column()
    	birthday:Date;

    @Column({length:1500})
    	image_author:string;

    @ManyToMany(()=> Songs, (song)=> song.authors)
    @JoinTable()
    	songs:Songs[];
}