import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preposition'
})
export class PropositionPipe implements PipeTransform {

  transform(value: string) 
  {
    if(!value) return null;
    let words =value.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if(this.checkPreposition(word) && i !=0)
      words[i] = word.toLowerCase();
      else
      words[i] =this.toTitleCase(word);

    }
    return words.join(" ");
  }

  private checkPreposition(word : string):boolean{
    let preposition = ["of","the"]
    return preposition.includes(word.toLowerCase()) 
  }

  private toTitleCase(word : string) : string{
    return word.substring(0,1).toUpperCase() + word.substring(1).toLowerCase()
  }

}
