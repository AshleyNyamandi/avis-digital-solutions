import { useParams, Link } from "react-router";
import { services } from "../constants";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          Back to home
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link to="/#services" className="inline-block mb-6 text-blue-600 hover:underline">Back to services</Link>
          <br />

          <span className="inline-block bg-blue-50 text-blue-700 text-lg font-semibold px-3 py-1 rounded-full mb-4">
            {service.tag}
          </span>

          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-600 text-white rounded-xl">
              <Icon className="w-7 h-7" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              {service.label}
            </h1>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </div>
  );
}