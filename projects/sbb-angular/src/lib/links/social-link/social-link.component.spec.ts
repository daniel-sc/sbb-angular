import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialLinkComponent } from './social-link.component';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'sbb-icon-facebook',
  template: '{{icon}}'
})
class IconFacebookComponent { }

@Component({
  selector: 'sbb-icon-googleplus',
  template: ''
})
class IconGoogleplusComponent { }

@Component({
  selector: 'sbb-icon-instagram',
  template: ''
})
class IconInstagramComponent { }

@Component({
  selector: 'sbb-icon-pinterest',
  template: ''
})
class IconPinterestComponent { }

@Component({
  selector: 'sbb-icon-twitter',
  template: ''
})
class IconTwitterComponent { }

@Component({
  selector: 'sbb-icon-xing',
  template: ''
})
class IconXingComponent { }

@Component({
  selector: 'sbb-icon-youtube',
  template: ''
})
class IconYoutubeComponent { }

@Component({
  selector: 'sbb-icon-linkedin',
  template: ''
})
class IconLinkedinComponent { }


describe('SocialLinkComponent', () => {
  let component: SocialLinkComponent;
  let fixture: ComponentFixture<SocialLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialLinkComponent,

        // mocks
        IconFacebookComponent,
        IconGoogleplusComponent,
        IconInstagramComponent,
        IconLinkedinComponent,
        IconPinterestComponent,
        IconTwitterComponent,
        IconXingComponent,
        IconYoutubeComponent
      ]
    })
    .overrideComponent(SocialLinkComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })
    .compileComponents();
  }));

  beforeEach(() => {


    fixture = TestBed.createComponent(SocialLinkComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have grey background and white icon', () => {
    component.icon = 'facebook';
    fixture.detectChanges();

    const elementStyle = getComputedStyle(fixture.debugElement.nativeElement);

    // #66666 == rgb(102,102,102)
    expect(elementStyle.getPropertyValue('background-color')).toBe('rgb(102, 102, 102)');

    const icon = fixture.debugElement.query(By.css('sbb-icon-facebook'));
    expect(icon).toBeTruthy();

    const iconStyle = getComputedStyle(icon.nativeElement);

    // #FFFFFF == rgb(255,255,255)
    expect(iconStyle.getPropertyValue('fill')).toBe('rgb(255, 255, 255)');
  });

  it('should have a sbb-icon-facebook component', () => {
    component.icon = 'facebook';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-facebook'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-googleplus component', () => {
    component.icon = 'google-plus';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-googleplus'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-instagram component', () => {
    component.icon = 'instagram';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-instagram'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-linkedin component', () => {
    component.icon = 'linkedin';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-linkedin'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-pinterest component', () => {
    component.icon = 'pinterest';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-pinterest'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-twitter component', () => {
    component.icon = 'twitter';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-twitter'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-xing component', () => {
    component.icon = 'xing';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-xing'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });

  it('should have a sbb-icon-youtube component', () => {
    component.icon = 'youtube';
    fixture.detectChanges();

    const icons = fixture.debugElement.queryAll(By.css('sbb-icon-youtube'));
    expect(icons).toBeTruthy();
    expect(icons.length).toBe(1);
  });
});
