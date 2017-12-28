import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Batman' },
      { id: 12, name: 'Spider Man' },
      { id: 13, name: 'Superman' },
      { id: 14, name: 'Iron Man' },
      { id: 15, name: 'Hulk' },
      { id: 16, name: 'Tor' },
      { id: 17, name: 'Wolverine' },
      { id: 18, name: 'Captain America' },
      { id: 19, name: 'Deadpool' },
      { id: 20, name: 'Ghost Rider' }
    ];
    return {heroes};
  }
}