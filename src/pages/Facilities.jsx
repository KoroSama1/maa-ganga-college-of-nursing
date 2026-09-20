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
export default function Facilities() {
  const [media] = useMedia();
  const dynamic = media
    .filter((m) => m.type === "facility")
    .map((m) => [m.title || "Campus image", m.data, "Added from Admin demo."]);
  const all = [...dynamic, ...facilities];
  return (
    <>
      <PageHero
        eyebrow="CAMPUS"
        title="Facilities & Learning Spaces"
        text="Explore the facilities listed by the institution, presented in a cleaner visual directory."
      />
      <section className="section">
        <div className="container facilityGridNew">
          {all.map(([name, img, desc], i) => (
            <article className="facilityCardNew" key={name + i}>
              <div className="facilityImage">
                <img src={img.startsWith("data:") ? img : IMG + img} />
                <span>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3>{name}</h3>
                <p>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
