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

  createProfileForm: FormGroup;

  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) {
    this.createProfileForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      occupation: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  selectedImage: any;
  selectedPdf:any;

  storedData: string | null = typeof localStorage !== 'undefined'
    ? JSON.parse(localStorage.getItem('currentEmailid') ?? 'null')
    : null;

  emailId = this.storedData;

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
      formData.append('country', this.createProfileForm.value.country);
      formData.append('phone', this.createProfileForm.value.phone);
      formData.append('occupation', this.createProfileForm.value.occupation);
      formData.append('email', this.emailId ?? '');
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
