import React,{useMemo,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {ArrowRight,ArrowUpRight,Bell,CalendarDays,CheckCircle2,ExternalLink,FileText,HeartPulse,Image as ImageIcon,Landmark,MapPin,Phone,Search,ShieldCheck,Sparkles,Stethoscope,Upload,Users,Building2,GraduationCap,Activity,Mail} from 'lucide-react';
import {IMG,DOC,programs,facilities,activities,committees,docs,seedFaculty,seedNews} from '../data/siteData';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import {useMedia,useFaculty,useNews} from '../components/storage';
export default function Contact(){return <><PageHero eyebrow="CONTACT" title="Contact the college" text="Reach Maa Ganga College of Nursing, Washim." image="campus-1.jpg"/><section className="section"><div className="container contactGridNew"><div className="contactInfo"><div className="contactItem"><span><MapPin/></span><div><span className="eyebrow">ADDRESS</span><p>Maa Ganga Memorial Baheti Hospital Campus, Akola Naka, Tq. & Dist. Washim – 444505</p></div></div><div className="contactItem"><span><Phone/></span><div><span className="eyebrow">PHONE</span><p>(07252) 232371<br/>9022409461 · 9158550742</p></div></div><div className="contactItem"><span><Mail/></span><div><span className="eyebrow">EMAIL</span><p>Use the college's official email address here when provided by the client.</p></div></div></div><div className="mapPanel"><div className="mapPin"><MapPin size={28}/></div><h3>Washim, Maharashtra</h3><p>Map integration can be connected in the production version.</p><a className="underLink" href="https://maps.google.com/?q=Washim,Maharashtra" target="_blank" rel="noreferrer">Open map <ExternalLink size={15}/></a></div></div></section></>}

