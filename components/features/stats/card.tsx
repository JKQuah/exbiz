import { HandCoins, Handshake, Users } from "lucide-react";

export default function StatsCard() {
  return (
    <>
      {/* Stats */}
      <div className="container mx-auto px-4 md:px-6 2xl:max-w-[1400px]">
        <div className="max-w-5xl px-4 xl:px-0 py-10 mx-auto">
          <div className="border rounded-xl">
            <div className="p-4 lg:p-8 rounded-xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-y-20 gap-x-12">
                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <Handshake size={40} className="mx-auto" />
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-3xl font-semibold">200+</h3>
                    <p className="mt-1 sm:text-base text-muted-foreground">
                      New startups
                    </p>
                  </div>
                </div>
                {/* End Stats */}

                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <Users size={40} className="mx-auto stroke-black" />
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-3xl font-semibold">95%</h3>
                    <p className="mt-1 sm:text-base text-muted-foreground">
                      Happy customers
                    </p>
                  </div>
                </div>
                {/* End Stats */}

                {/* Stats */}
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-border before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <HandCoins size={40} className="mx-auto" />
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-3xl font-semibold">≤ 3 days</h3>
                    <p className="mt-1 sm:text-base text-muted-foreground">
                      Up to 40% faster registration
                    </p>
                  </div>
                </div>
                {/* End Stats */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Stats */}
    </>
  );
}
