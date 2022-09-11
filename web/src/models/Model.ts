import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  set(value: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface ModelSync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface ModelEvents {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

export class Model {}
