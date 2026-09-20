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
export default function Committees() {
  return (
    <>
      <PageHero
        eyebrow="GOVERNANCE"
        title="Committees"
        text="Committee information supplied by the institution."
      />
      <section className="section">
        <div className="container committeeList">
          {Object.entries(committees).map(([name, rows]) => (
            <article className="committeeCard" key={name}>
              <div className="committeeTitle">
                <span>
                  <Users size={20} />
                </span>
                <div>
                  <span className="eyebrow">COMMITTEE</span>
                  <h2>{name}</h2>
                </div>
              </div>
              <div className="tableWrap">
                <table>
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Contact</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((r, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{r[0]}</td>
                        <td>{r[1]}</td>
                        <td>{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
