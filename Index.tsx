import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, CreditCard, ShieldCheck, RotateCcw, Star } from "lucide-react";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { CollectionCard } from "@/components/CollectionCard";
import { collections, getFeaturedProducts, getNewProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: Truck, t: "Frete grátis", d: "Acima de R$ 199" },
  { icon: CreditCard, t: "Até 10x sem juros", d: "No cartão de crédito" },
  { icon: ShieldCheck, t: "Compra segura", d: "Site protegido" },
  { icon: RotateCcw, t: "Troca fácil", d: "7 dias para trocar" },
];

const reviews = [
  { name: "Juliana M.", text: "Chegou antes do prazo e a qualidade é incrível. O relógio é lindo!" },
  { name: "Rafael S.", text: "Preço ótimo e atendimento muito rápido pelo WhatsApp. Recomendo." },
  { name: "Camila R.", text: "Já é minha terceira compra. A bolsa é exatamente como na foto." },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  const bestSellers = getFeaturedProducts().slice(0, 8);
  const newProducts = getNewProducts().slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground">
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80"
          alt="Loja Gold Company"
          className="absolute inset-0 w-full h-full object-cover opacity-40 animate-ken-burns"
        />
        <div className="relative container-full py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-3 py-1 mb-6 text-[11px] font-bold tracking-[0.25em] uppercase bg-primary text-primary-foreground">
              Ofertas da semana · até 50% OFF
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-background mb-6 leading-[0.95]">
              Estilo de ouro,
              <br />
              <span className="italic text-primary">preço de verdade.</span>
            </h1>
            <p className="text-base md:text-lg text-background/75 mb-10 max-w-lg">
              Acessórios, moda e utensílios selecionados, com entrega para todo o Brasil e parcelamento em até 10x.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-none px-10 py-6 text-sm font-semibold tracking-[0.15em] uppercase btn-premium">
                <Link to="/products">
                  Ver ofertas <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-10 py-6 text-sm tracking-[0.15em] uppercase bg-transparent border-background/40 text-background hover:bg-background hover:text-foreground">
                <Link to="/products?sort=newest">Lançamentos</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks bar */}
      <section className="border-b border-border bg-card">
        <div className="container-full grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {perks.map(({ icon: Icon, t, d }) => (
            <div key={t} className="flex items-center justify-center gap-3 py-5 px-3">
              <Icon className="w-6 h-6 text-primary shrink-0" />
              <div>
                <p className="text-sm font-semibold text-foreground">{t}</p>
                <p className="text-xs text-muted-foreground">{d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container-full">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">Compre por</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">Categorias</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {collections.map((c, i) => (
              <CollectionCard key={c.id} collection={c} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container-full">
          <div className="flex items-end justify-between mb-10">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">Em alta</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Mais vendidos</h2>
            </motion.div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase text-foreground hover:text-primary transition-colors">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner */}
      <section className="bg-foreground">
        <div className="container-full py-14 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-4">Oferta especial</p>
            <h2 className="font-serif text-4xl md:text-6xl text-background leading-[1] mb-4">
              5% OFF extra <span className="italic text-primary">pagando no Pix</span>
            </h2>
            <p className="text-background/70 mb-8 max-w-md">
              Economize ainda mais em qualquer produto da loja. Desconto aplicado na finalização da compra.
            </p>
            <Button asChild size="lg" className="rounded-none px-10 py-6 text-sm font-semibold tracking-[0.15em] uppercase">
              <Link to="/products">Aproveitar agora</Link>
            </Button>
          </div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80"
              alt="Moda e acessórios"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="py-16 md:py-24">
        <div className="container-full">
          <div className="flex items-end justify-between mb-10">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">Acabou de chegar</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground">Lançamentos</h2>
            </motion.div>
            <Link to="/products?sort=newest" className="hidden md:flex items-center gap-2 text-sm font-semibold tracking-[0.1em] uppercase text-foreground hover:text-primary transition-colors">
              Ver tudo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {newProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container-full">
          <motion.div {...fadeUp} className="text-center mb-12">
            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-primary mb-3">+ de 5.000 clientes satisfeitos</p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">O que dizem nossos clientes</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-card border border-border p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-sm font-semibold text-muted-foreground">{r.name} · Compra verificada</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
