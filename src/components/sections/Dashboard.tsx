
import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from 'recharts';
import { TrendingUp, Activity, PieChart } from 'lucide-react';

const data = [
  { name: 'Mon', value: 3200 },
  { name: 'Tue', value: 4500 },
  { name: 'Wed', value: 4100 },
  { name: 'Thu', value: 5800 },
  { name: 'Fri', value: 5200 },
  { name: 'Sat', value: 7200 },
  { name: 'Sun', value: 6800 },
];

export const Dashboard: React.FC = () => {
  return (
    <section className="py-40 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-brand-gold/10 blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-stretch">

          <div className="lg:col-span-4 flex flex-col justify-between space-y-12">
            <div className="space-y-6">
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border-brand-gold/20 text-brand-gold shadow-[0_0_15px_-5px_rgba(202,138,4,0.3)]">
                <TrendingUp size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Live stats. <br />
                <span className="text-gray-600">Deadly accurate.</span>
              </h2>
              <p className="text-gray-500 font-light leading-relaxed">
                Real-time ingestion of your financial data mapped onto a fluid, understandable interface. No more guessing games.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-3xl border-white/5 hover:border-brand-gold/20 transition-colors shadow-lg">
                <Activity size={18} className="text-brand-gold mb-4" />
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Growth</p>
                <p className="text-xl font-bold text-white">+12.4%</p>
              </div>
              <div className="glass p-6 rounded-3xl border-white/5 hover:border-brand-gold/20 transition-colors shadow-lg">
                <PieChart size={18} className="text-white/60 mb-4" />
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Saving</p>
                <p className="text-xl font-bold text-white">$12.5k</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="h-full glass rounded-[48px] p-2 border-white/10 relative overflow-hidden group">
              {/* Dashboard Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 to-transparent pointer-events-none"></div>

              <div className="bg-[#080808] rounded-[42px] h-full w-full p-8 md:p-12 border border-white/5">
                <div className="flex justify-between items-center mb-12">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Weekly Performance</h3>
                    <p className="text-xs text-gray-500 font-medium">Tracking reward points vs spending</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                      <div className="w-1 h-4 bg-brand-gold rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/5 transition-colors">
                      <div className="w-4 h-1 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#CA8A04" stopOpacity={0.2} />
                          <stop offset="100%" stopColor="#CA8A04" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <Tooltip
                        cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
                        contentStyle={{
                          backgroundColor: 'rgba(12,10,9,0.9)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          borderRadius: '16px',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}
                        itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#CA8A04"
                        fill="url(#chartGradient)"
                        strokeWidth={3}
                        animationDuration={2000}
                        dot={{ r: 4, fill: '#CA8A04', strokeWidth: 2, stroke: '#080808' }}
                        activeDot={{ r: 6, fill: '#fff', stroke: '#CA8A04', strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="mt-8 flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Points</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-white/20"></div>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Spending</span>
                    </div>
                  </div>
                  <button className="text-[10px] font-black uppercase tracking-widest text-brand-gold hover:text-white transition-colors cursor-pointer">
                    Download Report
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
