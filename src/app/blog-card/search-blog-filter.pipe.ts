import { Pipe, PipeTransform } from '@angular/core';
import { BlogCard } from './BlogCard';

@Pipe({
  // pipe adı
  name: 'searchBlogFilter',
  standalone: true
})
//Export
export class SearchBlogFilterPipe implements PipeTransform {
// transform: manipulation
  transform(value: BlogCard[], dataFilterBlogCategory?: any): BlogCard[] {
    dataFilterBlogCategory=dataFilterBlogCategory?dataFilterBlogCategory.toLocaleLowerCase():null;
    return dataFilterBlogCategory ? value.filter(
      (category:BlogCard)=>
      category.categoryName.toLocaleLowerCase().indexOf(dataFilterBlogCategory)!==-1
    ):value;
  }

}
