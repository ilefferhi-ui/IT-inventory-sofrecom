export default function NetworkStatus() {
  const segments = [
    { 
      name: 'Segment 1', 
      status: 'online',
      devices: ['Server B02', 'Switch A01']
    },
    { 
      name: 'Segment 2', 
      status: 'online',
      devices: ['Server B01', 'Switch B02']
    },
    { 
      name: 'Segment 3', 
      status: 'offline',
      devices: ['Switch X1', 'Switch 202', 'Serveur B02']
    },
    { 
      name: 'Segment 4', 
      status: 'offline',
      devices: ['Server B01', 'Switch B03']
    },
    { 
      name: 'Segment 5', 
      status: 'offline',
      devices: ['Server B02', 'Switch B03']
    },
    { 
      name: 'Segment 6', 
      status: 'offline',
      devices: ['Server B01', 'Server B02', 'Server B03']
    }
  ];

  return (
    <div className="network-grid">
      {segments.map((seg, i) => (
        <div key={i} className={`network-segment segment-${seg.status}`}>
          <div className="segment-header">
            <span className={`status-dot status-${seg.status}`}></span>
            <span className="segment-name">{seg.name}</span>
            <span className="segment-status">{seg.status}</span>
          </div>
          {seg.devices.length > 0 && (
            <div className="segment-devices">
              {seg.devices.map((device, j) => (
                <div key={j} className="device-item">
                  <span className="device-dot"></span>
                  <span>{device}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
