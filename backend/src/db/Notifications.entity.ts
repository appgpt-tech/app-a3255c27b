//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Notifications')
export class NotificationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text', { nullable: true })
  description: string;

  @Column('integer', { nullable: true })
  relatedCustomer: number;

  @Column('text', { nullable: true })
  type: string;

  @Column('text', { nullable: true })
  message: string;

  @Column('date', { nullable: true })
  dateScheduled: Date;

  @Column('text', { nullable: true })
  status: string;
}