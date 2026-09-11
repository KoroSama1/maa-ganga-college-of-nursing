import React,{useMemo,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {ArrowRight,ArrowUpRight,Bell,CalendarDays,CheckCircle2,ExternalLink,FileText,HeartPulse,Image as ImageIcon,Landmark,MapPin,Phone,Search,ShieldCheck,Sparkles,Stethoscope,Upload,Users,Building2,GraduationCap,Activity,Mail} from 'lucide-react';
import {IMG,DOC,programs,facilities,activities,committees,docs,seedFaculty,seedNews} from '../data/siteData';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import {useMedia,useFaculty,useNews} from '../components/storage';
export default function Activities(){return <><PageHero eyebrow="CAMPUS LIFE" title="Activities" text="A gallery using the activity photographs supplied by the college." image="activity-3.jpg"/><section className="section"><div className="container activityGallery">{activities.map(([label,img],i)=><figure key={img+i}><img src={IMG+img}/><figcaption><span>Activity {String(i+1).padStart(2,'0')}</span><strong>{label}</strong></figcaption></figure>)}</div></section></>}
