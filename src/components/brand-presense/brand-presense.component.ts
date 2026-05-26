import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-brand-presense',
  templateUrl: './brand-presense.component.html',
  styleUrls: ['./brand-presense.component.css']
})
export class BrandPresenseComponent {
  isMobile = window.innerWidth <= 990;
  isMenuVisible: boolean[] = [false, false, false, false];
  constructor(private elementRef: ElementRef) { }
  // title: string = 'Our Outlets';
  locations: { name: string; link: string }[] = [
     { name: 'Vasant Vihar', link: 'https://maps.app.goo.gl/xedpyBBmFZ8EkQBfA' },
    { name: 'Hariniwas circle', link: 'https://maps.app.goo.gl/WCWaVZmYCbn4kM6P9' },
    { name: 'Thane station', link: 'https://maps.app.goo.gl/F9BghnKrxG2ExSNu9' },
    { name: 'Hiranandani Estate', link: 'https://maps.app.goo.gl/qHTBF53mRFxgAH1L8' },
    { name: 'Mira Road', link: 'https://maps.app.goo.gl/tss3tdxgeS8R1Xvw5' },
    { name: 'Dombivali', link: 'https://maps.app.goo.gl/Z8xhF7nJrBMJ9Lwy9' },
    { name: 'Kalyan', link: 'https://maps.app.goo.gl/gNajQsBqTNfhbrPW8' },
    { name: 'Ulhasnagar', link: 'https://maps.app.goo.gl/KFA3aMnQw3Uu7c889' },
    { name: 'Badlapur', link: 'https://maps.app.goo.gl/CCk8MnNXrxq3Crzo7' },
    { name: 'Metro Mall, Kalyan', link: 'https://maps.app.goo.gl/ZUqJ8S9AxFrbCJvv9' },
    { name: 'Kalwa', link: 'https://maps.app.goo.gl/Nodcevm3uBMELEV5A' },
    { name: 'Ambernath', link: 'https://maps.app.goo.gl/qkvqRETwQprTuemE8' }
  ];
  mumbaiLocations = [
  { name: 'Parel', link: 'https://maps.app.goo.gl/a3jz9b8DVdJ4ygq77' },
  { name: 'Dadar', link: 'https://maps.app.goo.gl/nJEfnmRyAqAAaW2L6' },
  { name: 'Matunga', link: 'https://maps.app.goo.gl/beGvCxqWLagRQ8rc8' },
  { name: 'Andheri', link: 'https://maps.app.goo.gl/Ao2msMa43s5U2ivRA' },
  { name: 'Marol', link: 'https://maps.app.goo.gl/qo1yqL2G1gD5pBqB6' },
  { name: 'Malad', link: 'https://maps.app.goo.gl/WK8kYy2WqtKYN1nh6' },
  { name: 'Thakur Village', link: 'https://maps.app.goo.gl/VRpc6FDz63T6FMsa7' },
  { name: 'Powai', link: 'https://maps.app.goo.gl/ccPfy4Th7LLzi4E88' },
  { name: 'Chembur', link: 'https://maps.app.goo.gl/MZ7f2ePekxiL6Syg9' },
  { name: 'Ghatkopar', link: 'https://maps.app.goo.gl/afYomYSEJWNfkgov9' },
  { name: 'Mulund', link: 'https://maps.app.goo.gl/AjBETDL12Cj18BwEA' },
  { name: 'Vile Parle', link: 'https://maps.app.goo.gl/porGdeW65Xdg3Tea6' },
  { name: 'Khar', link: 'https://maps.app.goo.gl/Gbxp9ZB2ihqGakzm6' },
  { name: 'Bhandup', link: 'https://maps.app.goo.gl/L4EWPU2oEW9UWDDL8' }
];
naviMumbaiLocations = [
  { name: 'Airoli', link: 'https://maps.app.goo.gl/HVcJvfA7LBzVe4gM6' },
  { name: 'Seawoods', link: 'https://maps.app.goo.gl/rdwQgzpjun3mNPen9' },
  { name: 'Kharghar', link: 'https://maps.app.goo.gl/qJjZ128oevcuuxG97' },
  { name: 'Ulwe', link: 'https://maps.app.goo.gl/dtBFxQSH5Ji1vjbx6' }
];
puneLocations = [
  { name: 'Kothrud', link: 'https://maps.app.goo.gl/QhB5dRaRoverlayycbScVZb9' },
  { name: 'Koregaon Park', link: 'https://maps.app.goo.gl/AcsPZbnCJy4CtMan8' },
  { name: 'Salunkhe Vihar', link: 'https://maps.app.goo.gl/Laptmdab7ht5PUE4A' },
  { name: 'Magarpatta', link: 'https://maps.app.goo.gl/KX7LNQDzxum7TL7y6' },
  { name: 'Aundh', link: 'https://maps.app.goo.gl/Hk9HRe1rQCf9zNfS9' },
  { name: 'Viman nagar', link: 'https://maps.app.goo.gl/Zfwu1129JWdCTtJJ9' },
  { name: 'Sinhagad road', link: 'https://maps.app.goo.gl/J4ty7GaxKSYVw7Li7' },
  { name: 'Bharati Vidyapeeth', link: 'https://maps.app.goo.gl/KMvY9Y4SfHgmCa4P9' }
];

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    let button: any[4] = [];
    let menu: any[4] = [];
    button[0] = document.getElementById('mum');
    menu[0] = document.getElementById('mum-list');

    button[1] = document.getElementById('thane');
    menu[1] = document.getElementById('thane-list');

    button[2] = document.getElementById('navi-mum');
    menu[2] = document.getElementById('navi-mum-list');

    button[3] = document.getElementById('pune');
    menu[3] = document.getElementById('pune-list');
    // mum
    // thane
    // navi-mum
    // pune
    button.forEach((btn: any, index: number) => {
      if (btn && !btn.contains(target) && menu[index] && !menu[index].contains(target)) {
        this.isMenuVisible[index] = false;
      }
    });

  }

  toggleClass(id: number) {
    // let btn = document.getElementById(id);
    let ul = document.getElementById(id + '-list');

    // btn!.classList.toggle('active');
    // ul!.classList.toggle('show');
    this.isMenuVisible[id] = !this.isMenuVisible[id];

  }
  onMenuClick(event: Event) {
    event.stopPropagation(); // Prevent event from bubbling up to document
  }

  onMouseLeave() {
    const mapIframe = document.getElementById("mapiframe");
    if (mapIframe) {
      (mapIframe as HTMLIFrameElement).style.pointerEvents = 'none';
    }
  }

  onMouseEnter() {
    const mapIframe = document.getElementById("mapiframe");
    if (mapIframe) {
      (mapIframe as HTMLIFrameElement).style.pointerEvents = 'auto';
    }
  }
}
