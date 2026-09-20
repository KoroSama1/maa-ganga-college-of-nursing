import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  FileText,
  HeartPulse,
  Image as ImageIcon,
  Landmark,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Upload,
  Users,
  Building2,
  GraduationCap,
  Activity,
  Mail,
} from "lucide-react";
import {
  IMG,
  DOC,
  programs,
  facilities,
  activities,
  committees,
  docs,
  seedFaculty,
  seedNews,
} from "../data/siteData";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import { useMedia, useFaculty, useNews } from "../components/storage";
export default function Faculty() {
  const [faculty] = useFaculty();
  return (
    <>
      <PageHero
        eyebrow="PEOPLE"
        title="Teaching Staff"
        text="Faculty profiles can be maintained through the Admin demo."
      />
      <section className="section">
        <div className="container facultyGridNew">
          {faculty.map((f) => (
            <article className="facultyCardNew" key={f.id}>
              {f.image ? (
                <img src={f.image} alt={f.name} />
              ) : (
                <div className="facultyPlaceholder">
                  <Users size={38} />
                  <span>Photo can be added by Admin</span>
                </div>
              )}
              <div>
                <span className="eyebrow">TEACHING STAFF</span>
                <h3>{f.name}</h3>
                <p>{f.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
