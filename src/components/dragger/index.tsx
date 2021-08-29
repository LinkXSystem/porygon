import React, { useRef, MouseEvent as ReactMouseEvent } from 'react';

export const Dragger: React.FunctionComponent<{ children: React.ReactChild }> = ({ children }) => {
    const _container = useRef(null);

    let _ox = 0;
    let _oy = 0;

    let _x = 0;
    let _y = 0;

    const handleMouseDown = (_event: ReactMouseEvent) => {
        // TODO: 子元素也会冒泡

        // console.warn('dragger', 'mousedown', '_event', _event);

        if (_container.current) {
            const _element = _container.current as unknown as HTMLElement;

            // console.warn(' _element.parentElement',  _element.parentElement?.getBoundingClientRect());

            // @ts-ignore
            const _parent = _element.parentElement.getBoundingClientRect();

            const rect = _element.getBoundingClientRect();

            _ox = rect.left - _parent?.left;
            _oy = rect.top  - _parent?.top;
        }

        _x = _event.clientX;
        _y = _event.clientY;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup',   handleMouseUp  );
    }

    const handleMouseMove = (_event: MouseEvent) => {
        // @ts-ignore
        window.document.querySelector('body').style.cursor = 'move';
        
        let _nx = _event.clientX;
        let _ny = _event.clientY;

        if (_container.current) {
            const _element = _container.current as unknown as HTMLElement;
            _element.style.position = 'absolute';
            _element.style.left  = `${(_nx - _x + _ox)}px`;
            _element.style.top   = `${(_ny - _y + _oy)}px`;
        }
    }

    const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup',   handleMouseUp  );

        // @ts-ignore
        window.document.querySelector('body').style.cursor = 'default';
    }

    return (
        <div ref={_container} onMouseDown={handleMouseDown} >
            {children}
        </div>
    )
}