import { Component, ChangeDetectionStrategy } from '@angular/core';
import { StackLayout } from "ui/layouts/stack-layout";
import { Label } from "ui/label";
import { TabView, SelectedIndexChangedEventData } from "ui/tab-view";
import {View} from "ui/core/view";
import {TextField} from "ui/text-field";

@Component({
  selector: 'about',
  templateUrl: 'modules/about/about.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
  public tabviewitems: Array<any>;
  public name: String;

  constructor() {
    this.tabviewitems = [];
    this.name = "First name";
    let innerFirstStackLayout = new StackLayout();
    innerFirstStackLayout.height = 500;
    let firstLabel = new Label();

    firstLabel.margin = "50";
    firstLabel.text = "Label first page";

    let textField = new TextField();
    innerFirstStackLayout.addChild(firstLabel);
    innerFirstStackLayout.addChild(textField);

    let innerSecondStackLayout = new StackLayout();
    let secondLabel = new Label();
    secondLabel.marginTop = 50;
    secondLabel.text = "Label second page";
    innerSecondStackLayout.addChild(secondLabel);

    let innerThirdStackLayout = new StackLayout();
    let thirdLabel = new Label();
    thirdLabel.marginTop = 50;
    thirdLabel.text = "Label third page";
    innerThirdStackLayout.addChild(thirdLabel);

    this.tabviewitems.push({ title: "Tab1", view: innerFirstStackLayout });
    this.tabviewitems.push({ title: "Tab2", view: innerSecondStackLayout });
    this.tabviewitems.push({ title: "Tab3", view: innerThirdStackLayout });

  }

  public tabViewIndexChange(res) {
    alert("Tab View selected index: " + res);

  }
}
