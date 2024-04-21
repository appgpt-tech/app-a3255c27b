//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Workouts')
export class WorkoutsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('integer', { nullable: true })
  relatedCustomer: number;

  @Column('text', { nullable: true })
  type: string;

  @Column('real', { nullable: true })
  duration: number;

  @Column('text', { nullable: true })
  intensity: string;

  @Column('real', { nullable: true })
  caloriesBurned: number;

  @Column('date', { nullable: true })
  date: Date;
}
