import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from '../product/product';

describe('ProductComponent', () => {
  let component: Product;
  let fixture: ComponentFixture<Product>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Product]
    }).compileComponents();

    fixture = TestBed.createComponent(Product);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the product component', () => {
    expect(component).toBeTruthy();
  });
});
