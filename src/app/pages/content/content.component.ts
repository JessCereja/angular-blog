import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  @Input()
  contentPic: string = '';

  @Input()
  contentTitle: string = '';

  @Input()
  contentDescription: string = '';
  private Id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.Id = value.get('id')));
    this.setValuesToComponent(this.Id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id === id)[0];

    this.contentPic = result.pic;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }
}
