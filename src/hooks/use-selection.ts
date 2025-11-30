import { useCallback, useEffect, useState } from 'react';

export interface ISelection<T = string> {
    deselectAll: () => void;
    deselectOne: (key: T) => void;
    selectAll: () => void;
    selectOne: (key: T) => void;
    selected: Set<T>;
    selectedAny: boolean;
    selectedAll: boolean;
}

// IMPORTANT: To prevent infinite loop, `keys` argument must be memoized with React.useMemo hook.
export function useSelection<T = string>(keys: T[] = []): ISelection<T> {
    const [selected, setSelected] = useState<Set<T>>(new Set());

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSelected(new Set());
    }, [keys]);

    const handleDeselectAll = useCallback(() => {
        setSelected(new Set());
    }, []);

    const handleDeselectOne = useCallback((key: T) => {
        setSelected((prev) => {
            const copy = new Set(prev);
            copy.delete(key);
            return copy;
        });
    }, []);

    const handleSelectAll = useCallback(() => {
        setSelected(new Set(keys));
    }, [keys]);

    const handleSelectOne = useCallback((key: T) => {
        setSelected((prev) => {
            const copy = new Set(prev);
            copy.add(key);
            return copy;
        });
    }, []);

    const selectedAny = selected.size > 0;
    const selectedAll = selected.size === keys.length;

    return {
        deselectAll: handleDeselectAll,
        deselectOne: handleDeselectOne,
        selectAll: handleSelectAll,
        selectOne: handleSelectOne,
        selected,
        selectedAny,
        selectedAll
    };
}
