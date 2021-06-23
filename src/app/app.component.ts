import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  value = 0;
  items = [
    {
      id: 1,
      name: 'One',
      experienceLevel: 45,
    },
    {
      id: 2,
      name: 'Two',
      experienceLevel: 4,
    },
    {
      id: 3,
      name: 'Three',
      experienceLevel: 86,
    },
    {
      id: 4,
      name: 'Four',
      experienceLevel: 34,
    },
    {
      id: 5,
      name: 'Five',
      experienceLevel: 98,
    },
    {
      id: 6,
      name: 'Six',
      experienceLevel: 1,
    },
  ];

  valueChange(event: any, id: number) {
    setTimeout(() => {
      if (id) {
        let index = this.items.findIndex((skill) => {
          return skill.id === id;
        });

        let value = this.items[index].experienceLevel;
        if (event !== value) {
          this.items[index].experienceLevel = event;
        }
      }
    }, 0);
  }

  printArray() {
    console.log(this.items);
  }
}
