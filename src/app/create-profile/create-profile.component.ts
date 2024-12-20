import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrl: './create-profile.component.css'
})
export class CreateProfileComponent {

  countryNames = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda',
    'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas',
    'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize',
    'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil',
    'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon',
    'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia',
    'Comoros', 'Congo (Brazzaville)', 'Congo (Kinshasa)', 'Costa Rica', 'Côte d\'Ivoire',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti',
    'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador',
    'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Fiji', 'Finland',
    'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece',
    'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
    'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'North Korea', 'South Korea', 'Kosovo', 'Kuwait',
    'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya',
    'Lithuania', 'Luxembourg', 'Macedonia (FYROM)', 'Madagascar', 'Malawi',
    'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania',
    'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia',
    'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (Burma)', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea',
    'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
    'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines',
    'Samoa', 'San Marino', 'São Tomé and Principe', 'Saudi Arabia', 'Senegal',
    'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Sint Maarten', 'Slovakia',
    'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Sudan',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland',
    'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga',
    'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda',
    'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay',
    'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen',
    'Zambia', 'Zimbabwe'
  ];

  occupations = [
    "Actor",
    "Actress",
    "Architect",
    "Artist",
    "Craft Artist",
    "Dancer",
    "Designer",
    "Fashion Designer",
    "Graphic Designer",
    "Interior Designer",
    "Musician",
    "Painter",
    "Photographer",
    "Sculptor",
    "Writer",
    "Accountant",
    "Auditor",
    "Bank Manager",
    "Business Analyst",
    "Business Development Manager",
    "CEO",
    "CFO",
    "Financial Advisor",
    "Financial Analyst",
    "Human Resources Manager",
    "Investment Banker",
    "Management Consultant",
    "Marketing Manager",
    "Operations Manager",
    "Project Manager",
    "Risk Manager",
    "Sales Manager",
    "Stockbroker",
    "Trader",
    "Academic Advisor",
    "Admissions Counselor",
    "Assistant Professor",
    "Associate Professor",
    "Dean",
    "Department Chair",
    "Education Researcher",
    "Elementary School Teacher",
    "High School Teacher",
    "Instructional Designer",
    "Librarian",
    "Middle School Teacher",
    "Preschool Teacher",
    "Professor",
    "Researcher",
    "School Administrator",
    "School Counselor",
    "Special Education Teacher",
    "Teacher",
    "Tutor",
    "University Administrator",
    "Aerospace Engineer",
    "Biomedical Engineer",
    "Chemical Engineer",
    "Civil Engineer",
    "Computer Engineer",
    "Electrical Engineer",
    "Environmental Engineer",
    "Industrial Engineer",
    "Materials Engineer",
    "Mechanical Engineer",
    "Nuclear Engineer",
    "Petroleum Engineer",
    "Software Engineer",
    "Anesthesiologist",
    "Cardiologist",
    "Chiropractor",
    "Dentist",
    "Dermatologist",
    "Dietitian",
    "Doctor",
    "Endocrinologist",
    "Gastroenterologist",
    "Gynecologist",
    "Hematologist",
    "Immunologist",
    "Nephrologist",
    "Neurologist",
    "Nurse",
    "Nurse Practitioner",
    "Obstetrician",
    "Occupational Therapist",
    "Oncologist",
    "Optometrist",
    "Orthopedic Surgeon",
    "Otolaryngologist",
    "Pathologist",
    "Pediatrician",
    "Pharmacist",
    "Physical Therapist",
    "Physician",
    "Plastic Surgeon",
    "Podiatrist",
    "Psychiatrist",
    "Psychologist",
    "Pulmonologist",
    "Radiologist",
    "Rehabilitation Counselor",
    "Rheumatologist",
    "Speech-Language Pathologist",
    "Surgeon",
    "Urologist",
    "Veterinarian",
    "Airline Pilot",
    "Airline Steward/Stewardess",
    "Bellhop",
    "Chef",
    "Concierge",
    "Event Coordinator",
    "Flight Attendant",
    "Hotel Manager",
    "Hotel Receptionist",
    "Housekeeper",
    "Maitre d'",
    "Restaurant Manager",
    "Tour Guide",
    "Travel Agent",
    "Waiter/Waitress",
    "Artificial Intelligence Engineer",
    "Cloud Computing Professional",
    "Cybersecurity Specialist",
    "Data Analyst",
    "Data Scientist",
    "Database Administrator",
    "DevOps Engineer",
    "Full Stack Developer",
    "Game Developer",
    "Information Security Analyst",
    "IT Manager",
    "Machine Learning Engineer",
    "Mobile App Developer",
    "Network Administrator",
    "Network Security Engineer",
    "Software Developer",
    "Software Engineer",
    "System Administrator",
    "UX/UI Designer",
    "Web Developer",
    "Bailiff",
    "Court Reporter",
    "Judge",
    "Law Clerk",
    "Law Enforcement Officer",
    "Lawyer",
    "Paralegal",
    "Police Officer",
    "Probation Officer",
    "Prosecutor",
    "Sheriff",
    "Assembly Line Worker",
    "CNC Machinist",
    "Electrician",
    "Engineer",
    "Factory Worker",
    "Forklift Operator",
    "Industrial Engineer",
    "Maintenance Technician",
    "Manufacturing Engineer",
    "Mechanic",
    "Operations Manager",
    "Plumber",
    "Production Manager",
    "Quality Control Inspector",
    "Robotics Engineer",
    "Supply Chain Manager",
    "Welder"];

  educations = [
    "Primary Education",
    "Middle School",
    "High School (SSC/ Matriculation)",
    "Higher Secondary (HSC/ Intermediate)",
    "Bachelor of Arts (BA)",
    "Bachelor of Science (BSc)",
    "Bachelor of Commerce (BCom)",
    "Bachelor of Engineering (BE)",
    "Bachelor of Technology (BTech)",
    "Bachelor of Business Administration (BBA)",
    "Bachelor of Computer Applications (BCA)",
    "Bachelor of Laws (LLB)",
    "Bachelor of Architecture (BArch)",
    "Bachelor of Design (BDes)",
    "Bachelor of Fine Arts (BFA)",
    "Bachelor of Pharmacy (BPharm)",
    "Master of Arts (MA)",
    "Master of Science (MSc)",
    "Master of Commerce (MCom)",
    "Master of Engineering (ME)",
    "Master of Technology (MTech)",
    "Master of Business Administration (MBA)",
    "Master of Computer Applications (MCA)",
    "Master of Laws (LLM)",
    "Master of Architecture (MArch)",
    "Master of Design (MDes)",
    "Master of Fine Arts (MFA)",
    "Master of Pharmacy (MPharm)",
    "Doctor of Philosophy (PhD)",
    "Doctor of Literature (DLitt)",
    "Doctor of Science (DSc)",
    "Doctor of Laws (LLD)",
    "Diploma in Engineering",
    "Diploma in Technology",
    "Diploma in Management",
    "Diploma in Computer Applications",
    "Certificate in Vocational Courses",
    "Certificate in Language Courses",
    "Chartered Accountancy (CA)",
    "Company Secretaryship (CS)",
    "Cost and Management Accountancy (CMA)",
    "Indian Institute of Management (IIM)",
    "Indian Institute of Technology (IIT)",
    "National Institute of Open Schooling (NIOS)",
    "International Baccalaureate (IB)",
    "Cambridge International Examinations (CIE)",
    "Other international qualifications"
  ]

  countryCodes = [
    996, 995, 994, 992, 98, 977, 975, 974, 973, 972, 970, 968, 966, 965, 964, 962, 961, 960,
    95, 93, 92, 91, 880, 86, 856, 855, 853, 852, 850, 82, 81, 7, 692, 690, 689, 687, 686,
    685, 683, 682, 680, 679, 676, 675, 674, 673, 670, 64, 63, 62, 61, 60, 599, 596, 595, 594,
    593, 592, 591, 590, 57, 56, 55, 54, 53, 51, 509, 508, 507, 506, 505, 504, 503, 502, 501,
    500, 49, 48, 47, 45, 43, 423, 420, 39, 389, 387, 385, 378, 376, 375, 374, 372, 371, 370,
    36, 359, 358, 357, 356, 355, 354, 353, 352, 351, 350, 33, 32, 31, 30, 299, 298, 297, 291,
    269, 267, 266, 265, 264, 262, 261, 258, 257, 255, 254, 253, 251, 250, 245, 244, 241, 240,
    239, 238, 237, 236, 235, 234, 233, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 220,
    218, 213, 212, 20, 1
  ];

  createProfileForm: FormGroup;

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {
    this.createProfileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      height: ['', [Validators.required]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      district: ['', [Validators.required]],
      place: ['', [Validators.required]],
      countryCode: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      education: ['', [Validators.required]],
      occupation: ['', [Validators.required, Validators.minLength(5)]],
      diocese: ['', [Validators.required]],
      parish: ['', [Validators.required]],
      houseName: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      profilePicture: ['', [Validators.required]],
      idproof: ['', [Validators.required]],
    })
  }

  selectedImage: any;
  selectedPdf: any;

  storedData: string | null = typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('currentEmailid') ?? 'null')
    : null;

  email = this.storedData;

  onImageSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }

  onPdfSelected(event: any) {
    this.selectedPdf = event.target.files[0];
  }

  createProfile() {
    if (this.createProfileForm.valid) {
      const formData = new FormData();
      formData.append('name', this.createProfileForm.value.name);
      formData.append('age', this.createProfileForm.value.age);
      formData.append('gender', this.createProfileForm.value.gender);
      formData.append('height', this.createProfileForm.value.height);
      formData.append('country', this.createProfileForm.value.country);
      formData.append('state', this.createProfileForm.value.state);
      formData.append('district', this.createProfileForm.value.district);
      formData.append('place', this.createProfileForm.value.place);
      formData.append('countryCode', this.createProfileForm.value.countryCode);
      formData.append('email', this.email ?? '');
      formData.append('education', this.createProfileForm.value.education);
      formData.append('occupation', this.createProfileForm.value.occupation);
      formData.append('diocese', this.createProfileForm.value.diocese);
      formData.append('parish', this.createProfileForm.value.parish);
      formData.append('houseName', this.createProfileForm.value.houseName);
      formData.append('fatherName', this.createProfileForm.value.fatherName);
      formData.append('motherName', this.createProfileForm.value.motherName);
      formData.append('image', this.selectedImage);
      formData.append('pdf', this.selectedPdf);
      this.ds.createProfile(formData).subscribe((result: any) => {
        alert(result.message)
        this.router.navigateByUrl("")
      },
        result => {
          alert(result.error.message)
        }
      )
    }
    else {
      alert("Invalid Form")
    }
  }
}
