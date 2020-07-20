import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('marked_points')
class MarkedPoint{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar')
    latitude: string;
    
    @Column('varchar')
    longitude: string;
    
    @Column('varchar')
    description: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date; 
};

export default MarkedPoint;