import { useEffect, useRef, useState } from "react"

const items = [
  {
    image: "https://cdn.poehali.dev/projects/335b39d6-43e9-4a68-83f9-a0500102f80a/files/a45583a2-8198-49d5-8bc8-41cd0656e4fb.jpg",
    title: "Хатха-йога",
    tag: "Индивидуальное занятие",
  },
  {
    image: "https://cdn.poehali.dev/projects/335b39d6-43e9-4a68-83f9-a0500102f80a/files/cdd575e8-3f33-4263-9262-aa24644b6693.jpg",
    title: "Пилатес",
    tag: "Работа с телом",
  },
  {
    image: "https://cdn.poehali.dev/projects/335b39d6-43e9-4a68-83f9-a0500102f80a/files/cea59bb9-e49f-4b17-99f0-870e7728e4d6.jpg",
    title: "Групповые классы",
    tag: "Живые занятия",
  },
]

export function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className={`text-xs tracking-[0.3em] uppercase text-terracotta mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Портфолио
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Моя практика
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden aspect-[3/4] bg-sand transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-xs tracking-widest uppercase text-primary-foreground/70 mb-2">{item.tag}</p>
                <h3 className="font-serif text-2xl text-primary-foreground font-light">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
