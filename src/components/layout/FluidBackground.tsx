export default function FluidBackground() {
  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-[-1] bg-[var(--color-bg-light)] transition-colors duration-500">
      <div 
        className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-gradient-to-tr from-[#32ADE6] to-[#007AFF] opacity-50 blur-[120px] rounded-full will-change-transform"
      />
      
      <div 
        className="absolute bottom-[-10%] left-[-5%] w-[70vw] h-[70vw] max-w-[900px] max-h-[900px] bg-gradient-to-tr from-[#FF2D55] to-[#5856D6] opacity-40 blur-[150px] rounded-full will-change-transform"
      />

      <div 
        className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-gradient-to-tr from-[#34C759] to-[#32ADE6] opacity-30 blur-[130px] rounded-full mix-blend-overlay will-change-transform"
      />
    </div>
  );
}
