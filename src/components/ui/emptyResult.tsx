
type NoResultsProps = {
    onReset : () => void
}

export default function NoResults ({ onReset } : NoResultsProps ) { 
  return (
    <div className="text-center py-16">
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-white border border-slate-200 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
          <circle cx="10" cy="10" r="6" stroke="#1e1b4b" strokeWidth="2" />
          <line x1="14.5" y1="14.5" x2="20" y2="20" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 8a2.5 2.5 0 0 1 3.5-2" stroke="#F2733A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
 
      <h3 className="font-serif text-xl font-medium text-slate-900">No encontramos destinos</h3>
      <p className="text-slate-500 text-sm max-w-xs mx-auto mt-2 mb-6">
        Probá con otro nombre o cambiá el filtro de continente.
      </p>
 
      <button
        onClick={onReset}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg"
      >
        Ver todos los destinos
      </button>
    </div>
  );
}