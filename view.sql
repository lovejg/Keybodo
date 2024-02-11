CREATE View V_switches AS
SELECT t_sw.switch_name,t_sw.switch_method,t_sw.switch_type,t_sp.gc_sf as spring_force,t_sw.switch_pitch,t_sw.switch_price,t_sw.maker,t_sw.infolink FROM `T_switch` t_sw
    JOIN (
        SELECT switch_id,GROUP_CONCAT(spring_force) as gc_sf FROM `T_spring`
        GROUP BY switch_id 
    )t_sp ON t_sw.switch_id = t_sp.switch_id;