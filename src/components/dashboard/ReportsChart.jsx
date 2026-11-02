import React, { useState } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { reportsChartData } from '../../data/dashboardData'

export const ReportsChart = () => {
  const [activePointIndex, setActivePointIndex] = useState(5)
  const [showMenu, setShowMenu] = useState(false)

  const width = 600
  const height = 240
  const paddingLeft = 45
  const paddingRight = 20
  const paddingTop = 35
  const paddingBottom = 40

  const plotWidth = width - paddingLeft - paddingRight
  const plotHeight = height - paddingTop - paddingBottom

  const yLabels = [100, 80, 60, 40, 20, 0]

  const points = reportsChartData.map((d, index) => {
    const x = paddingLeft + (index / (reportsChartData.length - 1)) * plotWidth
    const y = paddingTop + plotHeight - (d.value / 100) * plotHeight
    return { ...d, x, y, index }
  })

  const getCurvedPath = (pts) => {
    if (pts.length === 0) return ''
    let path = `M ${pts[0].x} ${pts[0].y}`
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i === 0 ? 0 : i - 1]
      const p1 = pts[i]
      const p2 = pts[i + 1]
      const p3 = pts[i + 2] || p2

      const cp1x = p1.x + (p2.x - p0.x) / 5
      const cp1y = p1.y + (p2.y - p0.y) / 5
      const cp2x = p2.x - (p3.x - p1.x) / 5
      const cp2y = p2.y - (p3.y - p1.y) / 5

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`
    }
    return path
  }

  const activePoint = points[activePointIndex] || points[5]

  return (
    <div className="bg-white rounded-2xl border border-[#F2F4F8] p-6 shadow-xs relative flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
        <h3 className="text-[16px] font-bold text-[#1A1D2F]">Reports</h3>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 rounded-lg text-[#9AA0AC] hover:text-[#1A1D2F] hover:bg-gray-50 transition-colors"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-1 w-36 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-20 text-[13px]">
              <button
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-700"
              >
                View Details
              </button>
              <button
                onClick={() => setShowMenu(false)}
                className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-700"
              >
                Export CSV
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none">
            <defs>
                            <linearGradient id="reportsGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38B6FF" />
                <stop offset="45%" stopColor="#7E5DF4" />
                <stop offset="85%" stopColor="#A855F7" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>

                            <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7E5DF4" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#7E5DF4" stopOpacity="0.0" />
              </linearGradient>

                            <filter id="tooltipShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodOpacity="0.25" />
              </filter>
            </defs>

                        {yLabels.map((val) => {
              const y = paddingTop + plotHeight - (val / 100) * plotHeight
              return (
                <g key={val}>
                  <text
                    x={paddingLeft - 14}
                    y={y + 4}
                    textAnchor="end"
                    className="text-[11px] fill-[#9AA0AC] font-medium"
                  >
                    {val}
                  </text>
                  <line
                    x1={paddingLeft}
                    y1={y}
                    x2={width - paddingRight}
                    y2={y}
                    stroke="#F1F3F7"
                    strokeWidth="1"
                  />
                </g>
              )
            })}

                        {activePoint && (
              <line
                x1={activePoint.x}
                y1={activePoint.y}
                x2={activePoint.x}
                y2={paddingTop + plotHeight}
                stroke="#605BFF"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
            )}

                        <path
              d={`${getCurvedPath(points)} L ${points[points.length - 1].x} ${
                paddingTop + plotHeight
              } L ${points[0].x} ${paddingTop + plotHeight} Z`}
              fill="url(#areaGradient)"
            />

                        <path
              d={getCurvedPath(points)}
              fill="none"
              stroke="url(#reportsGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

                        {points.map((p, idx) => (
              <g
                key={idx}
                className="cursor-pointer"
                onClick={() => setActivePointIndex(idx)}
                onMouseEnter={() => setActivePointIndex(idx)}
              >
                                <circle cx={p.x} cy={p.y} r="14" fill="transparent" />
                <circle
                  cx={p.x}
                  cy={p.y}
                  r="4.5"
                  fill="#FFFFFF"
                  stroke="#8B5CF6"
                  strokeWidth="2.5"
                  className="transition-transform duration-150 hover:scale-125"
                />
              </g>
            ))}

                        {points.map((p, idx) => (
              <text
                key={idx}
                x={p.x}
                y={paddingTop + plotHeight + 22}
                textAnchor="middle"
                className={`text-[11px] font-medium transition-colors ${
                  activePointIndex === idx ? 'fill-[#605BFF] font-semibold' : 'fill-[#9AA0AC]'
                }`}
              >
                {p.time}
              </text>
            ))}

                        {activePoint && (
              <g transform={`translate(${activePoint.x}, ${activePoint.y - 48})`}>
                                <rect
                  x="-32"
                  y="-8"
                  width="64"
                  height="42"
                  rx="8"
                  fill="#0D1326"
                  filter="url(#tooltipShadow)"
                />
                                <path d="M -5 34 L 0 39 L 5 34 Z" fill="#0D1326" />
                                <text
                  x="0"
                  y="8"
                  textAnchor="middle"
                  fill="#94A3B8"
                  fontSize="10"
                  fontWeight="500"
                >
                  Sales
                </text>
                <text
                  x="0"
                  y="24"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="13"
                  fontWeight="bold"
                >
                  {activePoint.sales || (activePoint.value * 52).toLocaleString()}
                </text>
              </g>
            )}
          </svg>
      </div>
    </div>
  )
}
